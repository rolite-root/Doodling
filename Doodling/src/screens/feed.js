import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import styled from "styled-components/native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const posts = [
  {
    id: "1",
    user: "Sushant",
    profilePic: "https://via.placeholder.com/50",
    postText: "Love hangoverrrr",
    likes: 381,
    comments: 3020,
    tags: ["#bisexual"],
  },
];

const FeedScreen = () => {
  return (
    <Container>
      {/* Header */}
      <Header>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>DOODLING</Text>
        <Icons>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </Icons>
      </Header>

      {/* Story Section */}
      <StorySection>
        <Story>
          <ProfileImage source={{ uri: "https://via.placeholder.com/50" }} />
          <AddIcon name="plus-circle" size={20} color="#00D4FF" />
        </Story>
        <Text style={{ color: "white", marginTop: 5 }}>Your Story</Text>
      </StorySection>

      {/* Post List */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard>
            <UserInfo>
              <ProfileImage source={{ uri: item.profilePic }} />
              <Text style={{ color: "#fff", fontWeight: "bold" }}>{item.user}</Text>
            </UserInfo>
            <PostText>{item.postText}</PostText>
            <Actions>
              <FontAwesome name="heart-o" size={20} color="white" />
              <Text style={{ color: "white", marginLeft: 5 }}>{item.likes}</Text>
              <FontAwesome name="comment-o" size={20} color="white" style={{ marginLeft: 15 }} />
              <Text style={{ color: "white", marginLeft: 5 }}>{item.comments}</Text>
            </Actions>
          </PostCard>
        )}
      />

      {/* Bottom Navigation */}
      <BottomNav>
        <NavIcon>
          <Ionicons name="heart-outline" size={24} color="white" />
          <Text style={{ color: "white" }}>Match</Text>
        </NavIcon>
        <NavIcon>
          <Ionicons name="search-outline" size={24} color="white" />
          <Text style={{ color: "white" }}>Search</Text>
        </NavIcon>
        <NavIcon>
          <Ionicons name="add-circle-outline" size={24} color="white" />
          <Text style={{ color: "white" }}>Create</Text>
        </NavIcon>
        <NavIcon>
          <Ionicons name="planet-outline" size={24} color="white" />
          <Text style={{ color: "white" }}>Universes</Text>
        </NavIcon>
        <NavIcon>
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="white" />
          <Text style={{ color: "white" }}>Messages</Text>
        </NavIcon>
      </BottomNav>
    </Container>
  );
};

export default FeedScreen;

const Container = styled.View`
  flex: 1;
  background-color: #000;
  padding: 10px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

const Icons = styled.View`
  flex-direction: row;
  gap: 15px;
`;

const StorySection = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

const Story = styled.TouchableOpacity`
  align-items: center;
  margin-right: 15px;
`;

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 2px solid #00D4FF;
`;

const AddIcon = styled(FontAwesome)`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #000;
  border-radius: 50px;
`;

const PostCard = styled.View`
  background-color: #111;
  padding: 15px;
  margin: 10px 0;
  border-radius: 10px;
`;

const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const PostText = styled.Text`
  color: white;
  margin: 10px 0;
`;

const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const BottomNav = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 15px 0;
  background-color: #000;
`;

const NavIcon = styled.TouchableOpacity`
  align-items: center;
`;
