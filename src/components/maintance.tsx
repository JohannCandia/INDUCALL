import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Maintance = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center space-y-8 bg-gray-200">
      {/* Agregando una imagen de fondo */}
      <div style={{ backgroundImage: 'url("path_to_your_image.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }} className="w-full h-screen absolute top-0 left-0 z-0"></div>

      {/* Contenido principal */}
      <div className="z-10 p-8 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Sitio web en mantenimiento</h1>
        <p className="text-gray-600">Estamos trabajando para mejorar tu experiencia. Por favor, regresa más tarde.</p>
        <p className="text-gray-600 mt-4">Para más información, contacte con nosotros en:</p>
        <div className="flex items-center text-lime-500 space-x-2 mt-2">
          <EmailOutlinedIcon />
          <span>Ventas@inducall.cl</span>
        </div>

        {/* Fecha Estimada */}
        <p className="text-gray-600 mt-4">Esperamos estar de vuelta el 20 de Octubre, 2023.</p>

        {/* Redes Sociales */}
        <div className="flex items-center space-x-4 mt-6">
        
          <a href="https://facebook.com/inducall.cl" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="text-blue-700 hover:text-blue-900 cursor-pointer"/>
          </a>
          <a href="https://w.app/inducall" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="text-green-700 hover:green-blue-900 cursor-pointer"/>
          </a>
          {/* Agrega más íconos de redes sociales si los necesitas */}
        </div>
      </div>
    </div>
  );
};

export default Maintance;
