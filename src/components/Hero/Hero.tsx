import React from 'react';
import { getProducts, getUsers, deletePost } from '@/services/axios';

const Hero = async () => {
  const { data } = await getProducts();
  const { data: users } = await getUsers();

  const handleDeletePost = async (postId: string) => {
    try {
      await deletePost(postId);
    } catch (error) {
    console.error('Error deleting post:', error);
    }
  };

  return (
    <div>
      Hero!
      <ul>
        {/* @ts-ignore */}
        {data && data.map((product: any) => (
          <li key={product.id}>{product?.productName}</li>
        ))}
      </ul>
      {/* @ts-ignore */}
      <ul>{users && users.map((user, index) => <li key={user.id}>{user?.name}</li>)}</ul>
    </div>
  );
};

export default Hero;
