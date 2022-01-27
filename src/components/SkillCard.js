import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity key={skill} style={styles.buttonSkill}>
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1F1E25",
    fontSize: 22,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 10
  },
  textSkill: {
    color: "#fff",
    padding: 15,
    fontWeight: "bold",
  }
});