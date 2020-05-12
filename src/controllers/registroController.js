const controller = {};

controller.list = (req, res) => {
    res.render('registro.html', {
        title: 'Trascendencias'
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO Usuario set ?', [data], (err, contact) => {
            if (err){
                res.json(err);
            }
            console.log(contact);
            res.redirect('/');
        })
    })
}

module.exports = controller;