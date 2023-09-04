const UserProfile = ({ params }: any) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 my-auto h-screen">
      <p>UserProfile Page</p>
      <div className="px-5 py-3 bg-red-500">{params.id}</div>
    </div>
  );
};

export default UserProfile;
