import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useSelectCreation } from '../../hooks/useSelectCreation';
import { CTEXT } from '../../view/elements/custom';

import { GLOBAL } from '../../view/styles/global';
import { TYPOGRAPHY } from '../../view/styles/typography';

interface IOuterProps {
  creationId: string
}

function Creation({creationId}: IOuterProps) {

  const creation = useSelectCreation(creationId)
  
  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <ScrollView style={[GLOBAL.LAYOUT.pageContainer, styles.container]}>
          <View style={styles.creationContainer}>
            <CTEXT style={styles.visitsValue}>{creation ? `${creation.visits}` : "X"}</CTEXT>
            <CTEXT style={[GLOBAL.FONTS.h1, styles.value]}>{creation?.visits  === 1 ? "Visit" : "Visits"}</CTEXT>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
} 

export default Creation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#075669",
  },
  creationContainer: {
    paddingTop: "70%",
    alignItems: "center",
  },
  visitsValue: {
    fontSize: 60,
    fontWeight: "700",
    color: TYPOGRAPHY.COLOR.Default,
  },
  value: {
    color: TYPOGRAPHY.COLOR.Default,
  }
})
