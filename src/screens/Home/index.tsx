import React, { useRef } from "react"
import { useEffect, useState } from "react"
import { StatusBar } from "expo-status-bar"
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  SectionList,
  SectionListProps,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { Canvas, Rect } from "@shopify/react-native-skia"
import Animated, {
  Extrapolate,
  Extrapolation,
  FadeInDown,
  FadeInRight,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated"

import { styles } from "./styles"
import { THEME } from "@styles/theme"
import { globalStyles } from "@styles/globals"

import {
  sectionListDrinks,
  featuredDrinks,
  filterCategories,
} from "@assets/data/DrinkDataset"

import MapPin from "phosphor-react-native/src/fill/MapPin"
import ShoppingCart from "phosphor-react-native/src/fill/ShoppingCart"
import MagnifyingGlass from "phosphor-react-native/src/regular/MagnifyingGlass"

import { DrinkItem } from "@components/DrinkItem"
import { FilterButtonPill } from "@components/FilterButtonPill"
import { FeaturedDrinkItem } from "@components/FeaturedDrinkItem"

export function HomeScreen() {
  const { top } = useSafeAreaInsets()

  const BG_RECTANGLE_HEIGHT = 344

  const windowWidth = Dimensions.get("window").width
  const PAGE_WIDTH = windowWidth / 2

  const SHOW_HIDE_FILTER_HEADERS = 510

  const [selectedDrinkFilter, setSelectedDrinkFilter] = useState("")

  const topRectangleHeight = useSharedValue(40)

  const featDrinksScrollX = useSharedValue(0)
  const scrollY = useSharedValue(100)

  const sectionListRef = useRef<SectionList>(null)

  const featDrinksOnScrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      featDrinksScrollX.value = event.contentOffset.x
    },
  })

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      borderBottomWidth: 1,
      borderBottomColor: interpolateColor(
        scrollY.value,
        [100, 320],
        [THEME.COLORS.GREY_100, THEME.COLORS.GREY_600]
      ),
      backgroundColor: interpolateColor(
        scrollY.value,
        [100, 320],
        [THEME.COLORS.GREY_100, THEME.COLORS.GREY_800]
      ),
    }
  })

  const headerTextAnimatedStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        scrollY.value,
        [100, 320],
        [THEME.COLORS.GREY_900, THEME.COLORS.GREY_200]
      ),
    }
  })

  const showHeaderDrinksAnimatedStyle = useAnimatedStyle(() => {
    if (scrollY.value > SHOW_HIDE_FILTER_HEADERS) {
      return {
        display: "flex",
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: THEME.COLORS.GREY_700,
      }
    } else {
      return {
        display: "none",
      }
    }
  })

  const hideSectionListFilterDrinksAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [490, SHOW_HIDE_FILTER_HEADERS],
        [1, 0],
        Extrapolation.CLAMP
      ),
    }
  })

  function handleSelectedDrinkFilter(category: string, sectionIndex: number) {
    setSelectedDrinkFilter(category)

    if (sectionListRef.current) {
      sectionListRef.current?.scrollToLocation({
        sectionIndex,
        itemIndex: 1,
        animated: true,
      })
    }
  }

  function onScrollHandler(event: any) {
    scrollY.value = event.nativeEvent.contentOffset.y
  }

  useEffect(() => {
    topRectangleHeight.value = withTiming(BG_RECTANGLE_HEIGHT, {
      duration: 500,
    })
  }, [])

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <StatusBar
        translucent
        backgroundColor={THEME.COLORS.GREY_100}
        style="light"
      />

      {/* Header */}
      <Animated.View style={[styles.headerContainer, headerAnimatedStyle]}>
        <View style={styles.locationContainer}>
          <MapPin size={20} color={THEME.COLORS.PURPLE} />
          <Animated.Text
            style={[
              styles.locationText,
              globalStyles.textSM,
              headerTextAnimatedStyle,
            ]}
          >
            Porto Alegre, RS
          </Animated.Text>
        </View>
        <TouchableOpacity style={styles.cartContainer}>
          <ShoppingCart size={20} color={THEME.COLORS.YELLOW_DARK} />
        </TouchableOpacity>
      </Animated.View>

      {/* Filter Drinks */}
      <Animated.View
        style={(styles.drinksFilterContainer, showHeaderDrinksAnimatedStyle)}
      >
        <Text style={[globalStyles.titleMD, styles.drinksFilterTitle]}>
          Nossos cafés
        </Text>

        <View style={styles.drinksFilterPillsContainer}>
          <FlatList
            horizontal
            data={filterCategories}
            contentContainerStyle={{ gap: 8 }}
            renderItem={({ item, index }) => (
              <FilterButtonPill
                label={item.title}
                isSelected={selectedDrinkFilter === item.title ? true : false}
                onPress={() => handleSelectedDrinkFilter(item.title, index)}
              />
            )}
          />
        </View>
      </Animated.View>

      <SectionList
        ref={sectionListRef}
        sections={sectionListDrinks}
        showsVerticalScrollIndicator={false}
        scrollEnabled
        onScroll={(event) => onScrollHandler(event)}
        scrollEventThrottle={16}
        keyExtractor={(item, index) => item.id.toString()}
        stickySectionHeadersEnabled
        renderItem={({ item }) => (
          <Animated.View entering={FadeInDown.delay(1000).duration(300)}>
            <DrinkItem drink={item} />
          </Animated.View>
        )}
        contentContainerStyle={{
          gap: 16,
          justifyContent: "center",
        }}
        ListHeaderComponent={(index) => (
          <>
            <Canvas
              style={{
                height: BG_RECTANGLE_HEIGHT,
                width: windowWidth,
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <Rect
                x={0}
                y={0}
                width={windowWidth}
                height={topRectangleHeight}
                color={THEME.COLORS.GREY_100}
              />
            </Canvas>
            {/* Search */}
            <Animated.View
              entering={FadeInDown.delay(400).duration(300)}
              style={[styles.searchContainer]}
            >
              <Text style={[globalStyles.titleMD, globalStyles.textWHITE]}>
                Encontre o café perfeito para qualquer hora do dia
              </Text>
              <View style={styles.searchInputContainer}>
                <MagnifyingGlass size={16} color={THEME.COLORS.GREY_400} />

                <TextInput
                  style={[styles.searchInput, globalStyles.textSM]}
                  placeholder="Pesquisar"
                  placeholderTextColor={THEME.COLORS.GREY_400}
                />
              </View>
              <Image
                source={require("@assets/catalogue/coffee-bean.png")}
                style={styles.coffeeBean}
              />
            </Animated.View>

            {/* Featured Drinks */}
            <Animated.View
              style={[styles.featuredDrinksContainer]}
              entering={FadeInRight.delay(700).duration(400)}
            >
              <Animated.FlatList
                horizontal
                pagingEnabled
                data={featuredDrinks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                  <FeaturedDrinkItem
                    drink={item}
                    index={index}
                    scrollX={featDrinksScrollX}
                  />
                )}
                contentContainerStyle={{
                  paddingVertical: 8,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                showsHorizontalScrollIndicator={false}
                onScroll={featDrinksOnScrollHandler}
              />
            </Animated.View>

            {/* Filter Drinks */}
            <Animated.View style={hideSectionListFilterDrinksAnimatedStyle}>
              <Animated.View
                style={[styles.drinksFilterContainer]}
                entering={FadeInDown.delay(1000).duration(300)}
              >
                <Text style={[globalStyles.titleMD, styles.drinksFilterTitle]}>
                  Nossos cafés
                </Text>

                <Animated.View style={[styles.drinksFilterPillsContainer]}>
                  <FlatList
                    horizontal
                    data={filterCategories}
                    contentContainerStyle={{ gap: 8 }}
                    renderItem={({ item, index }) => (
                      <FilterButtonPill
                        label={item.title}
                        isSelected={
                          selectedDrinkFilter === item.title ? true : false
                        }
                        onPress={() =>
                          handleSelectedDrinkFilter(item.title, index)
                        }
                      />
                    )}
                  />
                </Animated.View>
              </Animated.View>
            </Animated.View>
          </>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Animated.Text
            entering={FadeInDown.delay(1000).duration(300)}
            style={[
              globalStyles.titleSM,
              styles.sectionListDrinksTitle,
              { paddingHorizontal: 32 },
            ]}
          >
            {title}
          </Animated.Text>
        )}
      />
    </View>
  )
}
