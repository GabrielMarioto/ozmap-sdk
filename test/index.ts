import OZMapSDK from "../src";

(async function () {
    const ozmap = new OZMapSDK('https://fiberschoolclass.ozmap.com.br:9994');
    await ozmap.authentication('admin', 'admin');


    const projectByUsername = await ozmap.getUser().getAllProjects("eduardo")
    console.log("PROJECTS BY USERNAME: ", projectByUsername)

    const userToFindByUsername = await ozmap.getUser().getByUsername('admin')
    console.log("GET USER BY USERNAME: ", userToFindByUsername)

    const userToFindByEmail = await ozmap.getUser().getByEmail("contato@devoz.com.br")
    console.log("GET USER BY EMAIL: ", userToFindByEmail)

})();