import DuckForm from './DuckForm';
const AddSection = ({ setDucks }) => {
    return (
        <section className='flex flex-col items-center gap-4  mx-8'>
            <h2 className='text-4xl'>Add a new duck to my pond!</h2>
            <DuckForm setDucks={setDucks} />
        </section>
    );
};

export default AddSection;
