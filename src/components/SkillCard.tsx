import React from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native";

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest} >
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