import { ScrollView, StyleSheet } from "react-native";
import Card from "../components/card";
import { CASES } from "../constants/index";

export default function Cases() {
  return (
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
      >
        <Card cases={CASES} />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    marginRight: 10,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#E0EAFF',
  },
});