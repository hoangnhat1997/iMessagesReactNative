import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { User, useAuth } from "../../src/context/auth";
import { getUsers } from "../../src/services/authService";
import { FlatList } from "react-native-gesture-handler";
import UserListItem from "../../src/components/UserListItem";

const NewChannel = () => {
  const [users, setUsers] = useState<User[]>([]);

  const { user: me } = useAuth();

  const userList = users.filter((user) => user.id !== me.id);

  console.log("------------", userList);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);
  return (
    <FlatList
      data={userList}
      renderItem={({ item }) => <UserListItem user={item} />}
    />
  );
};

export default NewChannel;
