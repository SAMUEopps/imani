import DeliveryDashboard from '../../components/DeliveryDashboard';
import Map from '../../components/Map';
import DeliveryDetails from '../../components/DeliveryDetails';
import Header from '@/components/Header';
import HeadNavigation from '@/components/HeadNavigation';
import Footer from '@/components/Footer';

const dummyTask: {
  orderId: string;
  customerName: string;
  deliveryAddress: string;
  orderItems: string[];
  status: 'In Progress' | 'Pending' | 'Completed'; // Ensure status is one of these values
} = {
  orderId: 'ORD001',
  customerName: 'John Doe',
  deliveryAddress: '123 Main St, City, Country',
  orderItems: ['Item 1', 'Item 2', 'Item 3'],
  status: 'In Progress', // Correct status
};

const DeliveryPage = () => {
  return (
    <div>
    <Header />
    <HeadNavigation />
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <DeliveryDashboard />
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default DeliveryPage;
