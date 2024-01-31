// Home.tsx
import React from "react";
import Container from "../../Components/SharedComponent/Container/Container";

const Home: React.FC = () => {
  return (
    <div>
      <Container>
        <h2>Home Page</h2>
        <p>Welcome to the home page!</p>
      </Container>
      {/* <hr className="mt-2" />
      <h3 className="text-lg font-medium py-2">Example Data Show With Transteck Query</h3>
      <Users /> */}
    </div>
  );
};

export default Home;
