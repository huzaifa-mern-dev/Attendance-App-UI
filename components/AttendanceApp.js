import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { styles } from './styles';
import { initialStudents } from './studentsData'; 

const AttendanceApp = () => {
  const [className, setClassName] = useState('Development & Design');
  const [searchTerm, setSearchTerm] = useState('');
  const [presentStudents, setPresentStudents] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [students, setStudents] = useState(initialStudents);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (Array.isArray(initialStudents)) {
      setStudents(initialStudents);
    } else {
      console.error('studentsData is not an array:', initialStudents);
    }
  }, [setStudents]);

  const handlePresent = (id) => {
    const student = students.find((s) => s.id === id);
    if (student) {
      setStudents((prevStudents) =>
        prevStudents.map((s) =>
          s.id === id ? { ...s, present: !s.present } : s
        )
      );
      setPresentStudents((prevPresentStudents) =>
        student.present
          ? prevPresentStudents.filter(
              (name) => name !== `${student.name} (Group ${student.group})`
            )
          : [...prevPresentStudents, `${student.name} (Group ${student.group})`]
      );
    }
  };

  const handleCopyPresentStudents = async () => {
    const date = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const presentStudentsWithoutGroup = presentStudents.map((student) =>
      student.replace(/ \(Group [AB]\)$/, '')
    );
    const textToCopy = `*${className}*\n${date}\n\n${presentStudentsWithoutGroup.join(
      '\n'
    )}`;

    try {
      await Clipboard.setString(textToCopy);
      Alert.alert('Success', 'Attendance copied to clipboard');
    } catch (error) {
      console.error('Failed to copy text: ', error);
      Alert.alert('Error', 'Failed to copy attendance');
    }
  };

  const handleResetAttendance = () => {
    setStudents(students.map((s) => ({ ...s, present: false })));
    setPresentStudents([]);
  };

  const filteredStudents = students
    .filter((student) => {
      const searchTermLower = searchTerm.toLowerCase();

      if (searchTermLower === 'group development' || searchTermLower === 'group design' || searchTermLower === 'group management') {
        return student.group.toLowerCase() === searchTermLower.split(' ')[1];
      }

      return (
        student.name.toLowerCase().includes(searchTermLower) ||
        student.group.toLowerCase().includes(searchTermLower)
      );
    })
    .sort((a, b) => a.name.localeCompare(b.name)); // Sort by name in ascending order

  const renderItem = ({ item }) => (
    <View style={styles.studentItem}>
      <View style={styles.studentInfo}>
        <Text style={styles.studentName}>{item.name}</Text>
        <Text style={styles.studentGroup}>Group {item.group}</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.presentButton,
          item.present && styles.presentButtonActive,
        ]}
        onPress={() => handlePresent(item.id)}>
        <Text
          style={[
            styles.presentButtonText,
            item.present && styles.presentButtonTextActive,
          ]}>
          {item.present ? 'Present' : 'Mark Present'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  if (students.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading students data...</Text>
      </SafeAreaView>
    );
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.title}>Attendance App</Text>
        <Text style={styles.className}>{className}</Text>
        <Text style={styles.date}>
          {currentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}{' '}
          | {currentDate.toLocaleTimeString()}
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={className}
          onChangeText={setClassName}
          placeholder="Group Name"
        />
        <TextInput
          style={styles.input}
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Search Group"
        />
      </View>

      <FlatList
        data={filteredStudents}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />

      <View style={styles.footer}>
        <Text style={styles.presentCount}>
          Present: {presentStudents.length}/{students.length}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.copyButton}
            onPress={handleCopyPresentStudents}>
            <Text style={styles.buttonText}>Copy Attendance</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.resetButton}
            onPress={handleResetAttendance}>
            <Text style={styles.buttonText}>Reset Attendance</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AttendanceApp;