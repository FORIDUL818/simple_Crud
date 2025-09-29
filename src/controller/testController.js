
const test=async (req,res) => {
    try {
         res.status(200).send("my app successfully run I am so happy to day");
    } catch (error) {
        res.status(500).json({status:"server is problems"})
    }
}

module.exports={
    test
}