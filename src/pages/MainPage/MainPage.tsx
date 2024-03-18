import { Card } from 'entities/Card/Card';
import { user } from 'helpers/posts/user';
import { Content } from 'widgets/Content/ui/Content';

export const MainPage = () => {

  return (
    <main>
      <Content>
        {user.map((userData) => (
          <Card key={userData.id} user={user.id} />
        ))}
      </Content>
    </main>
  );
}
