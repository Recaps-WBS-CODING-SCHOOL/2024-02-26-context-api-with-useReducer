import DuckPond from './DuckPond';
const DuckSection = ({ ducks, setDucks }) => {
    return (
        <section className='flex flex-col gap-4 m-4'>
            <h2 className='text-4xl'>The ducks in your pond:</h2>
            <DuckPond ducks={ducks} setDucks={setDucks} />
        </section>
    );
};

export default DuckSection;
