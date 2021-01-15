const calculaValorIdade = (plano, valorPlano) => {
    const idadeTitular = $("#idade-titular").val();
    let somaIdade = valorPlano;
    if (idadeTitular >= 60 && idadeTitular <= 69) {
      if (plano === "fit") {
        somaIdade = valorPlano + adicionalFit60;
      } else if (plano === "masterPlus") {
        somaIdade = valorPlano + adicionalMasterPlus;
      }
    } else if (idadeTitular >= 70 && idadeTitular <= 79) {
      if (plano === "fit") {
        somaIdade = valorPlano + adicionalFit70;
      } else if (plano === "masterPlus") {
        somaIdade = valorPlano + adicionalMasterPlus;
      }
    } else if (idadeTitular >= 80) {
      if (plano === "fit") {
        somaIdade = valorPlano + adicionalFit80;
      } else if (plano === "masterPlus") {
        somaIdade = valorPlano + adicionalMasterPlus;
      }
    } else {
      somaIdade = valorPlano;
    }
    console.log(`calculando valor por idade: ${somaIdade}`);
    return somaIdade;
  };

  const calculaAdicional = (plano) => {
    let somaAdicional = 0;
    if (plano === "fit") {
      somaAdicional =
        quantidade60() * adicionalFit60 +
        quantidade70() * adicionalFit70 +
        quantidade80() * adicionalFit80
      ;
    } else if (plano === "masterPlus") {
      somaAdicional =
        quantidade60() * adicionalMasterPlus +
        quantidade70() * adicionalMasterPlus +
        quantidade80() * adicionalMasterPlus
      ;
    } else {
      somaAdicional = 0;
    }
    console.log(`calculando adicional: ${somaAdicional}`);
    return somaAdicional;
  };

  const calculaTaxaDeAdesao = (plano) => {
    const totalDependentes = quantidade60() + quantidade70() + quantidade80();
    console.log(`calculando taxa de adesão: ${totalDependentes * taxaDeAdesao}`);
    return totalDependentes * taxaDeAdesao;
  };

  const calculaDesconto = (plano, valorTotal) => {

    const totalDependentes = quantidade60() + quantidade70() + quantidade80();
    let totalDesconto = valorTotal;
    if (plano === "fit") {
      if (totalDependentes === 1) {
        totalDesconto = (valorTotal * descontoFit_1_Dependente) / 100;
      } else if (totalDependentes > 1) {
        totalDesconto = (valorTotal * descontoFit_2_Dependente) / 100;
      }
    } else if (plano === "masterPlus") {
      if (totalDependentes === 1) {
        totalDesconto = (valorTotal * descontoMaster_1_Dependente) / 100;
      } else if (totalDependentes > 1) {
        totalDesconto = (valorTotal * descontoMaster_2_Dependente) / 100;
      }
    } else {
      return valorTotal;
    }
    console.log(`calculando desconto: ${totalDependentes * taxaDeAdesao}`);
    return totalDesconto;
  };