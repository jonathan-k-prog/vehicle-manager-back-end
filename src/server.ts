import express from "express";
import cors from "cors";
import * as dotenv from 'dotenv';
import http from "http";
import cookieParser from 'cookie-parser';
import brandRoutes from "./brand/brand.routes";
import partTypeRoutes from "./part-type/part-type.routes";
import partModelRoutes from "./part-model/part-model.routes";
import partRoutes from "./part/part.routes";
import vehicleModelRoutes from "./vehicle-model/vehicle-model.routes";
import vehicleRoutes from "./vehicle/vehicle.routes";
import warehouseRoutes from "./warehouse/warehouse.routes";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
    origin: [process.env.AUTHORIZED_URL!],
    credentials: true // permet l'envoi des cookies
}));

app.use('/api/brands', brandRoutes);
app.use('/api/warehouses', warehouseRoutes);

app.use('/api/vehicles', vehicleRoutes);
app.use('/api/vehicle-models', vehicleModelRoutes);

app.use('/api/parts', partRoutes);
app.use('/api/part-types', partTypeRoutes);
app.use('/api/part-models', partModelRoutes);


http.createServer(app)
app.listen(PORT, () => {
    console.log(`HTTP Server running on port: ${PORT}`);
});

