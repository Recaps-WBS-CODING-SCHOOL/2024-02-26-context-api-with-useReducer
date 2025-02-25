import { useState } from 'react';
import EditForm from './EditForm';

const DuckCard = ({ duck, setDucks }) => {
    const [editing, setEditing] = useState(false);
    const { imgUrl, name, quote, id } = duck;
    const handleDelete = () => {
        setDucks((prev) => {
            const updatedDucks = prev.filter((duck) => duck.id !== id);
            localStorage.setItem('ducks', JSON.stringify(updatedDucks));
            return updatedDucks;
        });
    };

    if (editing)
        return (
            <EditForm setDucks={setDucks} {...duck} setEditing={setEditing} />
        );

    return (
        <div className='shadow-xl hover:shadow-2xl hover:cursor-pointer w-96 rounded-md flex-flex-col'>
            <figure className='rounded-t-md overflow-hidden w-full h-96'>
                <img className='w-full h-full' src={imgUrl} alt={name} />
            </figure>
            <div className='flex flex-col p-6 pt-2 bg-slate-800 h-40'>
                <h2 className='text-3xl border-b-2 mb-4 border-b-gray-400'>
                    {name}
                </h2>
                <p>{quote}</p>
            </div>
            <div className='flex justify-end bg-slate-800 rounded-b-md pb-4 pr-4 gap-2'>
                <button
                    onClick={handleDelete}
                    className='bg-red-600 p-2 rounded-lg font-bold'
                >
                    Delete Duck
                </button>
                <button
                    onClick={() => setEditing(true)}
                    className='bg-green-600 p-2 rounded-lg font-bold'
                >
                    Edit Duck
                </button>
            </div>
        </div>
    );
};

export default DuckCard;
