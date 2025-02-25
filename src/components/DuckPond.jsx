import DuckCard from './DuckCard';

const DuckPond = ({ ducks, setDucks }) => {
    return (
        <div className='flex justify-center flex-wrap gap-12 w-full'>
            {ducks.map((duck) => (
                <DuckCard key={duck.id} duck={duck} setDucks={setDucks} />
            ))}
        </div>
    );
};
export default DuckPond;
