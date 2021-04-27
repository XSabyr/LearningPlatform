import { Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';

const WelcomePage = () => {
  let history = useHistory();

  return (
    <div>
      <Typography variant="h4">
        Привет, на этом сайте ты найдешь огромное количество интереснейших курсов на всевозможные
        темы.
      </Typography>
      <Typography variant="h6">
        Если готов начать, то не будем тянуть, нажми на кнопку снизу чтобы начать
      </Typography>
      <Button variant="contained" color="primary" onClick={() => history.push('/courses')}>
        Начать
      </Button>
    </div>
  );
};

export default WelcomePage;
