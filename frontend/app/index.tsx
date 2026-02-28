import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { Colors } from '../constants/colors';
import { useApp } from '../context/AppContext';
import { LanguageButton } from '../components/LanguageButton';

const { height } = Dimensions.get('window');

export default function LanguageSelectionScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { languages, siteSettings, loadData, setSelectedLanguage, isLoading } = useApp();
  const [selectedLang, setSelectedLang] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const handleLanguageSelect = (langCode: string) => {
    setSelectedLang(langCode);
    setSelectedLanguage(langCode);
    // Navigate to home after a brief delay
    setTimeout(() => {
      router.push('/home');
    }, 300);
  };

  if (isLoading || !siteSettings) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.accent} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={{ uri: siteSettings.default_hero_image }}
      style={styles.background}
      resizeMode="cover"
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)']}
        style={styles.gradient}
      >
        <ScrollView
          contentContainerStyle={[
            styles.content,
            { paddingTop: insets.top + 20, paddingBottom: insets.bottom + 20 },
          ]}
          showsVerticalScrollIndicator={false}
        >
          {/* Settings button */}
          <TouchableOpacity
            style={[styles.settingsButton, { top: insets.top + 10 }]}
            onPress={() => router.push('/admin')}
          >
            <Ionicons name="settings-outline" size={24} color={Colors.white} />
          </TouchableOpacity>

          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image
              source={{ uri: siteSettings.logo_url }}
              style={styles.logo}
              contentFit="contain"
            />
          </View>

          {/* Title */}
          <Text style={styles.title}>{siteSettings.site_name}</Text>

          {/* Description */}
          <Text style={styles.description}>{siteSettings.welcome_description}</Text>

          {/* Language selection */}
          <Text style={styles.selectLanguage}>Select your language</Text>
          
          <View style={styles.languageList}>
            {languages
              .filter(lang => lang.is_active)
              .sort((a, b) => a.order - b.order)
              .map(language => (
                <LanguageButton
                  key={language.code}
                  language={language}
                  isSelected={selectedLang === language.code}
                  onPress={() => handleLanguageSelect(language.code)}
                />
              ))}
          </View>
        </ScrollView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: Colors.text.secondary,
    fontFamily: 'Lato_400Regular',
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  settingsButton: {
    position: 'absolute',
    right: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  logoContainer: {
    marginTop: 40,
    marginBottom: 24,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Cinzel_700Bold',
    color: Colors.white,
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Lato_400Regular',
    color: Colors.gold[300],
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 24,
    marginBottom: 40,
    paddingHorizontal: 16,
  },
  selectLanguage: {
    fontSize: 14,
    fontFamily: 'Lato_700Bold',
    color: Colors.stone[300],
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 16,
  },
  languageList: {
    width: '100%',
    maxWidth: 320,
  },
});
