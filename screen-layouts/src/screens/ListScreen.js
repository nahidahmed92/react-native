import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const getAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // Adjust the age if the birthday hasn't happened yet this year
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

const ListScreen = () => {
  const friends = [
    { name: 'Nahid Ahmed', dob: '1992-05-21' },
    { name: 'Forida Ahmed (Cheater)', dob: '1996-01-21' },
    { name: 'Sean Blair (Adulter)', dob: '1995-03-09' },
    { name: 'Friend #4', dob: '1993-02-10' },
    { name: 'Friend #5', dob: '2005-07-25' },
    { name: 'Friend #6', dob: '2002-03-12' },
    { name: 'Friend #7', dob: '1992-11-08' },
    { name: 'Friend #8', dob: '1995-04-18' },
    { name: 'Friend #9', dob: '1974-06-22' },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        const age = getAge(item.dob);
        // item === { item: { name: 'Friend #1' }, index: 0}
        return (
          <Text>
            {item.name} - Age: {age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
