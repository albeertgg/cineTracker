import { useForm } from 'react-hook-form';
import Heading from '../components/Heading';

import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../components/Input';
import Button from '../components/Button';

interface ProfileFormValues {
  username: string;
  email: string;
  avatar: string;
}

export default function ProfilePage() {
  const { register, handleSubmit, formState } = useForm<ProfileFormValues>({
    mode: 'onChange',
  });

  const { errors } = formState;

  function onSubmit(data: ProfileFormValues) {
    console.log(data);
  }

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-7 mt-8 mb-2 w-sm"
      >
        <Input
          placeholder="Username"
          {...register('username')}
          errorMessage={errors.username?.message}
        />
        <Input
          placeholder="Email"
          type="email"
          {...register('email')}
          errorMessage={errors.email?.message}
        />
        <Input
          placeholder="Avatar url..."
          type="url"
          {...register('avatar')}
          errorMessage={errors.avatar?.message}
        />

        <Button type="submit">Update</Button>
      </form>
    </div>
  );
}
