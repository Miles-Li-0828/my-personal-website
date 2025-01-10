import { useRouter } from "next/navigation";

const BlogCard = ({ id, title, description, date, image }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/blogpages/${id}`);
    };

    return (
        <div
            className="w-2/3 mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
            onClick={handleClick}
        >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <span className="text-sm text-gray-500">{date}</span>
                </div>
                <p className="text-gray-700 mt-2">{description}</p>
            </div>
        </div>
    );
};

export default BlogCard;
