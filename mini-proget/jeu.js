let competences = [
    "Maquetter une application",
    "Réaliser une interface utilisateur web statique et adaptable",
    "Développer une interface utilisateur web dynamique",
    "Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce",
    "Créer une base de données - niveau 1",
    "Développer les composants d’accès aux données - niveau 1",
    "Développer la partie back-end d’une application web ou web mobile - niveau 1",
    "Framwork FrontEnd (React, vueJs...)",
    "Comprendre la démarche pédagogique à Solicode",
    "Collaboration & posture professionnelle"
  ];
  
  let score = 0;
  let result = 10;
  let i = 1;
  
  console.log(" taper C1..C10 pour chaque compétence");
  console.log("Vous avez " + result + " questions.\n");
  
  while (i <= result)
  {
      let index = Math.floor(Math.random() * competences.length);
      let correctCode = "C" + (index + 1);
  
      let answer = prompt("Question " + i + ":\nQuelle est le code pour :\n" + competences[index]);
  
      if (!answer)
      {
          alert("gobay");
          break;
      }
  
      if (answer == correctCode) 
      {
          console.log(" this's true");
          score++;
      } 
      else 
      {
          console.log("❌Faux, La bonne réponse est: " + correctCode);
      }
  
      i++;
  }
  
  console.log("\n🏁 Le jeu est terminé !");
  console.log("Votre score: " + score + " / " + result);