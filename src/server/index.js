// IMPORTANDO ROTAS
const novoColabRoute = require("./routes/novoColabRoute")
const loginRoute = require("./routes/loginRoute")
const precad1Route = require("./routes/colaboradorPreCadRoute")
const userRoute = require("./routes/userRoutes")
const departamentRoute = require("./routes/departamentRoutes")
const cargosRoutes = require("./routes/cargosRoutes")
const notificacaoRoutes = require("./routes/notificacaoRoutes")
const uploadRoutes = require("./routes/uploadRoutes")
const historicoRoutes = require("./routes/historicoRoutes")


// IMPORTANDO BIBLIOTECAS
const cors = require("cors")
const express = require("express");
const app = express();

// CONFIGURANDO BIBLIOTECAS
app.use(cors());
app.use(express.json());


// DEFININDO ROTAS
app.use("/novocolaborador", novoColabRoute)
app.use("/login", loginRoute)
app.use("/precad1", precad1Route)
app.use("/infocolab", userRoute)
app.use("/departamentos", departamentRoute)
app.use("/cargos", cargosRoutes)
app.use("/upload", uploadRoutes)
app.use("/notificacao", notificacaoRoutes)
app.use("/historico",historicoRoutes)

// DEFININDO PORTA
app.listen(5000, () => console.log('Servidor rodando'))