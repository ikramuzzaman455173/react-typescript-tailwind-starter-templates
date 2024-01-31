// Home.tsx
import React from "react";
import Container from "../../components/SharedComponent/Container/Container";
import SimpleCard from "./SimpleCard";

const Home: React.FC = () => {
  return (
    <div>
      <Container>
        <h2>Home Page</h2>
        <p>Welcome to the home page!</p>
        <hr className="mt-2" />
        <h3 className="text-xl font-medium py-2">
          Install or Setup ShadCn
        </h3>
        <SimpleCard />
      </Container>
      {/* <hr className="mt-2" />
      <h3 className="text-lg font-medium py-2">Example Data Show With Transteck Query</h3>
      <Users /> */}
    </div>
  );
};

export default Home;