interface ItemProps {
    image: React.ReactNode;
    title: string;
    techStack: string;
    note: string;
}

const Item: React.FC<ItemProps> = ({ image, title, techStack, note }) => {
    return (
        <div className='bg-white p-5 rounded flex flex-col gap-4'>
            <div className="flex items-center justify-left gap-4">
                <div className="block p-2 rounded-full bg-white shadow-md">
                    <span className="dark:bg-gray-800 shadow-lg">{image}</span>
                </div>
                <div>
                    <h2 className="font-bold">{title}</h2>
                    <p className="text-xs text-gray-700">{techStack}</p>
                </div>
            </div>
            <div>
                <p className="text-gray-700">{note}</p>
            </div>
        </div>
    );
};

export default Item;