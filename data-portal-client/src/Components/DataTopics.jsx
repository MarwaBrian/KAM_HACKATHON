import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faDatabase, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const data = [
    { icon: faDatabase, title: 'General KAM Exports and Import Data' },
    { icon: faCircleNotch, title: 'KAM Exports Data' },
    { icon: faBalanceScale, title: 'KAM Imports Data' },
    
];

const DataByTopics = () => {
    return (
        <div className="flex flex-col items-center p-4">
            <h2 className="text-2xl font-bold mb-6">Data by Topics</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <FontAwesomeIcon icon={item.icon} className="text-4xl text-blue-500 mb-4" />
                        <p className="text-center text-sm font-semibold">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataByTopics;
