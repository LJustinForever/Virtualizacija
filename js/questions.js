// creating an array and passing the number, questions, options, and answers

var questions = []
var picked_test = window.localStorage.getItem("test")
function set_question(which_q) {
  var decided_q = []

  switch (which_q) {
    case "1":
      decided_q = [
        {
          numb: 1,
          question: "Kokios šalies įmonei priklausė epidiaskopas „Triplex?",
          answer: "Vokietijos",
          options: [
            "Italijos",
            "Ispanijos",
            "Vokietijos",
            "Jungtinės Karalystės"
          ]
        },
        {
          numb: 2,
          question: "Kas yra velenas? ",
          answer: "Ritinys, perduodantis sukamąjį judesį",
          options: [
            "Ritinys, perduodantis sukamąjį judesį",
            "Nedidelis apvalus stiklas",
            "Medinio rėmo pavadinimas"
          ]
        }
      ];
      window.localStorage.setItem("test", "1" );
      break;
    case "2":
      decided_q = [
        {
          numb: 1,
          question: "Kas buvo Juozas Vokietaitis?",
          answer: "Pedagogas, nacionalinės mokyklos kūrėjas",
          options: [
            "Pedagogas, Lietuvos švietimo muziejaus įkūrėjas",
            "Pedagogas, nacionalinės mokyklos kūrėjas",
            "Dėstytojas, Lietuvos švietimo muziejaus įkūrėjas",
            "Verslininkas bei prisidėjęs prie laikraščio „Lietuvos ūkininkas“"
          ]
        },
        {
          numb: 2,
          question: "Kiek metų yra suteikiama garantija įsigijus šį parkerį?",
          answer: "25",
          options: [
            "80",
            "15",
            "25",
            "45"
          ]
        }
      ];
      window.localStorage.setItem("test", "2");
      break;
    case "3":
      decided_q = [
        {
          numb: 1,
          question: "Kokia tema dominuoja J. Bičiūno knygose?",
          answer: "Auklėjimo",
          options: [
            "Buities",
            "Meilės",
            "Karo",
            "Auklėjimo"
          ]
        },
        {
          numb: 2,
          question: "Kaip vadinasi Angelo Sąjungos žurnalas?",
          answer: "“Žvaiždutė”",
          options: [
            "“Varpas”",
            "“Žvaiždutė”",
            "“Aušra”",
            "“Tėvynės sargas”"
          ]
        }
      ];
      window.localStorage.setItem("test", "3" );
      break;
    case "4":
      decided_q = [
        {
          numb: 1,
          question: "Kam buvo pagamintas ženklelis, nuotraukoje pažymėtas 4 numeriu?",
          answer: "Vadams",
          options: [
            "Jaunesniesiems skautams",
            "Jaunesniosioms skautėms",
            "Vadams"
          ]
        },
        {
          numb: 2,
          question: "Kur buvo įkurtas pirmasis jaunųjų ūkininkų ratelis?",
          answer: "Kubiliūnų kaime",
          options: [
            "Bajorų kaime",
            "Kubiliūnų kaime",
            "Kalvelių kaime",
            "Kiškėnų kaime"
          ]
        },
        {
          numb: 3,
          question: "Kelintais metais įvyko skautų sąskrydis Palangoje?",
          answer: "1933 m",
          options: [
            "1938 m",
            "1923 m",
            "1941 m",
            "1933 m"
          ]
        }
      ];
      window.localStorage.setItem("test", "4" );
      break;
    case "5":
      decided_q = [
        {
          numb: 1,
          question: "Kiek miestų yra pažymėta reljefo modelyje?",
          answer: "88",
          options: [
            "80",
            "88",
            "78",
            "83"
          ]
        },
        {
          numb: 2,
          question: "Kelintais metais buvo išlietas šis reljefo modelis?",
          answer: "1922",
          options: [
            "1925",
            "1919",
            "1922",
            "1920"
          ]
        }
      ];
      window.localStorage.setItem("test", "5" );
      break;
    case "6":
      decided_q = [
        {
          numb: 1,
          question: "Kaip dar buvo vadinamos vakaronės?",
          answer: "vakarotuvės",
          options: [
            "naktinės",
            "vakarotuvės",
            "vakarienės",
            "vestuvės"
          ]
        },
        {
          numb: 2,
          question: "Ką veikdavo vakarotojai per vakarones?",
          answer: "dainuodavo",
          options: [
            "dainuodavo",
            "miegodavo",
            "valgydavo",
            "eidavo vaiduoklių medžioti"
          ]
        }
      ];
      window.localStorage.setItem("test", "6" );
      break;
    default:
      console.log(`Sorry, we are out of XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD`);
  }
  questions = decided_q
}
set_question(picked_test)
