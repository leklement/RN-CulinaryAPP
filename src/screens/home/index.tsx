import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Banner from '../../components/Banner';
import { CreationContainer } from '../../components/CreationContainer';
import Header from '../../components/Header';
import { CTEXT } from '../../view/elements/custom';

import { GLOBAL } from '../../view/styles/global';

function Home() {
  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <ScrollView style={GLOBAL.LAYOUT.pageContainer}>
        <Header />
        <Banner isNew title='Fish preparation like a star chef' author='Kristian Le'/>
        <CTEXT style={[GLOBAL.FONTS.h2, styles.sectionTitle]}>Creation for you</CTEXT>
        <CreationContainer />
      </ScrollView>
    </SafeAreaView>
  );
} 

export default Home;

const styles = StyleSheet.create({
  sectionTitle: {
    fontWeight: "600",
    paddingTop: 32,
  },
});
