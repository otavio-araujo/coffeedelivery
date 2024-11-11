import React, { useRef } from "react"
import { useEffect, useState } from "react"
import { StatusBar } from "expo-status-bar"
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  SectionList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import Carousel from "react-native-reanimated-carousel"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { Canvas, Rect } from "@shopify/react-native-skia"
import Animated, {
  Easing,
  FadeInDown,
  FadeInRight,
  FadeOutDown,
  useAnimatedScrollHandler,
  useSharedValue,
  withTiming,
} from "react-native-reanimated"

import { styles } from "./styles"
import { THEME } from "@styles/theme"
import { globalStyles } from "@styles/globals"

import { sectionListDrinks, featuredDrinks } from "@assets/data/DrinkDataset"

import MapPin from "phosphor-react-native/src/fill/MapPin"
import ShoppingCart from "phosphor-react-native/src/fill/ShoppingCart"
import MagnifyingGlass from "phosphor-react-native/src/regular/MagnifyingGlass"

import { DrinkItem } from "@components/DrinkItem"
import { FilterButtonPill } from "@components/FilterButtonPill"
import { FeaturedDrinkItem } from "@components/FeaturedDrinkItem"

export function HomeScreen() {
  const { top } = useSafeAreaInsets()

  const BG_RECTANGLE_HEIGHT = 420

  const windowWidth = Dimensions.get("window").width
  const PAGE_WIDTH = windowWidth / 2

  const selectedDrinkFilter = useSharedValue<string>("")

  const topRectangleHeight = useSharedValue(40)

  const featDrinksScrollX = useSharedValue(0)

  const sectionListRef = useRef<SectionList>(null)

  const featDrinksOnScrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      featDrinksScrollX.value = event.contentOffset.x
    },
  })

  function handleSelectedDrinkFilter(category: string, sectionIndex: number) {
    selectedDrinkFilter.value = category

    console.log(category)

    sectionListRef.current?.scrollToLocation({
      animated: true,
      itemIndex: 0,
      sectionIndex,
    })
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

      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.locationContainer}>
          <MapPin size={20} color={THEME.COLORS.PURPLE} />
          <Text style={[styles.locationText, globalStyles.textSM]}>
            Porto Alegre, RS
          </Text>
        </View>
        <TouchableOpacity style={styles.cartContainer}>
          <ShoppingCart size={20} color={THEME.COLORS.YELLOW_DARK} />
        </TouchableOpacity>
      </View>

      <SectionList
        sections={sectionListDrinks}
        showsVerticalScrollIndicator={false}
        scrollEnabled
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => <DrinkItem drink={item} />}
        contentContainerStyle={{
          gap: 16,
          justifyContent: "center",
        }}
        ListHeaderComponent={() => (
          <>
            {/* Search */}
            <Animated.View
              entering={FadeInDown.delay(400).duration(300)}
              style={styles.searchContainer}
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
              style={styles.featuredDrinksContainer}
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

            {/* Drinks */}
            <Animated.View
              style={styles.drinksFilterContainer}
              entering={FadeInDown.delay(1000).duration(300)}
            >
              <Text style={[globalStyles.titleMD, styles.drinksFilterTitle]}>
                Nossos cafés
              </Text>
              <View style={styles.drinksFilterPillsContainer}>
                <FilterButtonPill
                  label="tradicionais"
                  isSelected={
                    selectedDrinkFilter.value === "tradicionais" ? true : false
                  }
                  onPress={() => handleSelectedDrinkFilter("tradicionais", 0)}
                />
                <FilterButtonPill
                  label="doces"
                  isSelected={
                    selectedDrinkFilter.value === "doces" ? true : false
                  }
                  onPress={() => handleSelectedDrinkFilter("doces", 1)}
                />
                <FilterButtonPill
                  label="especiais"
                  isSelected={
                    selectedDrinkFilter.value === "especiais" ? true : false
                  }
                  onPress={() => handleSelectedDrinkFilter("especiais", 2)}
                />
              </View>
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
