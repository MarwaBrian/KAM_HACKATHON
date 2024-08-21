import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faDollarSign, faBalanceScale, faBank, faChartLine, faFlag, faGenderless, faMoneyBill, faDatabase, faCircleNotch, faWater, faHandshake } from '@fortawesome/free-solid-svg-icons';

const data = [
    { icon: faDatabase, title: 'Africa Infrastructure Knowledge Program' },
    { icon: faCircleNotch, title: 'AFDB Operations' },
    { icon: faBalanceScale, title: 'Balance of Payments' },
    { icon: faTree, title: 'Environment' },
    { icon: faDollarSign, title: 'Debt' },
    { icon: faMoneyBill, title: 'Financial Flows' },
    { icon: faBank, title: 'Financial Sector' },
    { icon: faHandshake, title: 'Governance' },
    { icon: faChartLine, title: 'Monetary Statistics' },
    { icon: faFlag, title: 'National Accounts' },
    { icon: faWater, title: 'Prices' },
    { icon: faGenderless, title: 'Gender' },
    { icon: faDollarSign, title: 'Public Finance' },
    { icon: faFlag, title: 'The High 5s' },
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
