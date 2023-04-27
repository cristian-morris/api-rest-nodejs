import * as pizzaServices from "../services/server.js";

export const getpizzas = (req, res) => {
    pizzaServices.getpizzas().then((result) => {
        res.status(200).json({data: result[0]});
    }).catch((err) => {
        res.status(500).send(err);
    });
};

export const getpizza = (req, res) => {
    const { id } = req.params;
    pizzaServices.getpizza(id).then((result) => {
        res.status(200).json(result[0]);
    }).catch((err) => {
        res.status(500).send(err);
    });
};

export const createpizza = (req, res) => {
    const pizza = req.body;
    pizzaServices.createpizza(pizza).then(() => {
        res.status(200).json({
            message: "insertado",
            data: pizza,});
    }).catch((err) => {
        res.status(500).send(err);
    });
}

export const updatepizza = (req, res) => {
    const pizza = req.body;
    const { id } = req.params;
    pizzaServices.updatepizza(id, pizza).then(() => {
        res.status(200).json({
            message: "actualizado",
            data: pizza,});
    }).catch((err) => {
        res.status(500).send(err);
    });
}

export const deletepizza = (req, res) => {
    const { id } = req.params;
    pizzaServices.deletepizza(id).then(() => {
        res.status(200).json({
            message: "eliminado"});
    }).catch((err) => {
        res.status(500).send(err);
    });
}

export const searchpizza = (req, res) => {
    const { precio } = req.params;
    pizzaServices.searchpizza(precio).then((result) => {
        res.status(200).json({data: result[0]});
    }).catch((err) => {
        res.status(500).send(err);
    });
};


export const searchnamepizza = (req, res) => {
    const { nombre } = req.params;
    pizzaServices.searchnamepizza(nombre).then((result) => {
        res.status(200).json({data: result[0]});
    }).catch((err) => {
        res.status(500).send(err);
    });
};