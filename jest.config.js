module.exports={
   /* passa por todos os testes ,independente se passou ou n*/  
  bail:true,
  coverageProvider: 'v8',

  testMatch: [
    /*verifica apenas os arquivos dentro desse diretorio*/
    "<rootDir>/src/**/*.spec.js"
  ],

}