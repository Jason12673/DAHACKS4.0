import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const skills = ['Coding', 'Fitness', 'Finance'];
const tasks = [
  { id: '1', name: 'Complete 1 coding challenge' },
  { id: '2', name: 'Read 10 pages' },
];

export default function HomeScreen() {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const [completed, setCompleted] = useState({});

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome, User</Text>
      {/* 技能选择区 */}
      <View style={styles.skillRow}>
        {skills.map(skill => (
          <TouchableOpacity
            key={skill}
            style={[
              styles.skillBtn,
              selectedSkill === skill && styles.selectedSkillBtn,
            ]}
            onPress={() => setSelectedSkill(skill)}
          >
            <Text style={styles.skillText}>{skill}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* 今日任务列表 */}
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskRow}>
            <Text>{item.name}</Text>
            <Button
              title={completed[item.id] ? 'Completed' : 'Complete'}
              disabled={completed[item.id]}
              onPress={() => setCompleted({ ...completed, [item.id]: true })}
            />
          </View>
        )}
      />
      {/* 排行榜入口 */}
      <Button title="View Leaderboard" onPress={() => {/* 跳转到排行榜页面 */}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  welcome: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  skillRow: { flexDirection: 'row', marginBottom: 20 },
  skillBtn: { padding: 10, backgroundColor: '#eee', marginRight: 10, borderRadius: 8 },
  selectedSkillBtn: { backgroundColor: '#ffd700' },
  skillText: { fontSize: 16 },
  taskRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 },
});