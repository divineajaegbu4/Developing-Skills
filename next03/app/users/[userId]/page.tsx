type Params = {
  params: {
    userId: string;
  };
};

function userPage({ params: { userId } }: Params) {
    console.log("userId", userId)
  return <div>page</div>;
}

export default userPage;
