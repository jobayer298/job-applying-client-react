
import Banner from './Banner';
import Category from './Category';
import { useLoaderData } from 'react-router-dom';
import Features_job from './Features_job';

const Home = () => {
    // const categoryData = useLoaderData()
    // console.log(categoryData);
    return (
      <div>
        <Banner></Banner>
        <Category></Category>
        <Features_job></Features_job>
      </div>
    );
};

export default Home;