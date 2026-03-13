import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Linking, Alert } from 'react-native';

const personagens = [
  {
    id: 1,
    nome: 'Cavaleiro',
    hp: '6(7)',
    def: '5(6)',
    mana: '180(200)',
    crtchan: '5',
    dmg: '4',
    spd: '6.5',
    armini: 'Pistola Velha',
    arminiimg: require('./assets/Bad_Pistol.png'),
    pass: 'Escudo Forte: Nenhum dano extra quando a armadura é quebrada.',
    imgpass: require('./assets/Buff_Strong_Shield.png'),
    img: require('./assets/Knight_0_art.png'),
    imgh1: require('./assets/Skill_Dual_Wield.png'),
    habilidade1tit: 'Empunhadura Dupla',
    habilidade1: 'Habilidade 1, Empunhadura Dupla: Duplica a arma atual nas duas mãos.',
    imgh2: require('./assets/Skill_Superior_Fire.png'),
    habilidade2tit: 'Disparos Superiores',
    habilidade2: 'Habilidade 2, Disparos Superiores: Usa ambas armas ao mesmo tempo, por um curto período de tempo.',
    imgh3: require('./assets/Skill_Chaotic_Strike.png'),
    habilidade3tit: 'Acerto Caótico',
    habilidade3: 'Habilidade 3, Acerto Caótico: Por um curto período de tempo, seus projéteis infligem um efeito aleatório nos alvos.'
  },
  {
    id: 2,
    nome: 'Guarda',
    hp: '5(6)',
    def: '3(4)',
    mana: '180(200)',
    crtchan: '10',
    dmg: '5',
    spd: '6.5',
    armini: 'João e Maria',
    arminiimg: require('./assets/Jack_and_Mary.png'),
    pass: 'Crítico Perfurante: Balas perfuram inimigos em acertos críticos.',
    imgpass: require('./assets/Buff_Piercing_Crit.png'),
    img: require('./assets/Rogue_0_art.png'),
    imgh1: require('./assets/Skill_Dodge.png'),
    habilidade1tit: 'Desvio',
    habilidade1: 'Habilidade 1, Desvio: Esquiva de ataques inimigos.',
    imgh2: require('./assets/Skill_Iaido.png'),
    habilidade2tit: 'Iaido',
    habilidade2: 'Habilidade 2, Iaido: Esquiva de ataques e corta inimigos, possui 3 cargas.',
    imgh3: require('./assets/Skill_Cartwheel.png'),
    habilidade3tit: 'Estrelinha',
    habilidade3: 'Habilidade 3, Estrelinha: Esquiva de ataques e causa dano de imapcto em inimigos ao segurar, realiza um corte giratório em volta de si ao soltar.'
  }, 
  {
    id: 3,
    nome: 'Bruxa',
    hp: '3(4)',
    def: '5(6)',
    mana: '240(260)',
    crtchan: '0',
    dmg: '3',
    spd: '6.5',
    armini: 'O Código',
    arminiimg: require('./assets/The_Code.png'),
    pass: 'Bastão Elemental: Projéteis elementais causam o dobro de dano em acertos críticos. Cajados causam dano aumentado.',
    imgpass: require('./assets/Buff_Elemental_Staff.png'),
    img: require('./assets/Witch_0_art.png'),
    imgh1: require('./assets/Skill_Lightning_Strike.png'),
    habilidade1tit: 'Golpe de Raio',
    habilidade1: 'Habilidade 1, Golpe de Raio: Lança um raio que causa dano e atordoa até 4 inimigos.',
    imgh2: require('./assets/Skill_Piercing_Frost.png'),
    habilidade2tit: 'Gelo Perfurante',
    habilidade2: 'Habilidade 2, Gelo Perfurante: Cria paredes de gelo que causa dano e bloqueiam projéteis.',
    imgh3: require('./assets/Skill_Firestorm.png'),
    habilidade3tit: 'Tempestade de Fogo',
    habilidade3: 'Habilidade 3, Tempestade de Fogo: Causa dano em uma grande área ao redor da personagem invocando 6 bolas de fogo.'
  }, 
  {
    id: 4,
    nome: 'Assasino',
    hp: '4(5)',
    def: '4(5)',
    mana: '180(200)',
    crtchan: '10',
    dmg: '5',
    spd: '7.5',
    armini: 'Lâmina Sangrenta',
    arminiimg: require('./assets/Blood_Blade.png'),
    pass: 'Refletir: Armas brancas refletem projéteis.',
    imgpass: require('./assets/Buff_Reflect.png'),
    img: require('./assets/Assassin_0_art.png'),
    imgh1: require('./assets/Skill_Dark_Blade.png'),
    habilidade1tit: 'Lâmina Sombria',
    habilidade1: 'Habilidade 1, Lâmina Sombria: Causa dano em uma linha à frente da personagem.',
    imgh2: require('./assets/Skill_Doppelganger.png'),
    habilidade2tit: 'Doppelgänger',
    habilidade2: 'Habilidade 2, Doppelgänger: Cria uma cópia da personagem que ataca os inimigos.',
    imgh3: require('./assets/Skill_Invisibility.png'),
    habilidade3tit: 'Invisibilidade',
    habilidade3: 'Habilidade 3, Invisibilidade: Torna-se invisível por um curto período de tempo, inimigos não conseguem te ver ou te atacar.'
  }, 
  {
    id: 5,
    nome: 'Alquimista',
    hp: '5(6)',
    def: '5(6)',
    mana: '180(200)',
    crtchan: '5',
    dmg: '4',
    spd: '6.5',
    armini: 'Máquina de Bolhas Dormentes',
    arminiimg: require('./assets/Dormant_Bubble_Machine.png'),
    pass: 'Resistência à Veneno: Garante imunidade a dano venenoso e redução de velocidade. Garante dano extra de veneno à inimigos.',
    imgpass: require('./assets/Buff_Poison.png'),
    img: require('./assets/Alchemist_0_art.png'),
    imgh1: require('./assets/Skill_Gas_Grenade.png'),
    habilidade1tit: 'Granada de Gás',
    habilidade1: 'Habilidade 1, Granada de Gás: Lança três granadas que criam nuvens venenosas, causando dano e redução de velocidade em inimigos dentro dela.',
    imgh2: require('./assets/Skill_Elemental_Potions.png'),
    habilidade2tit: 'Poções Elementais',
    habilidade2: 'Habilidade 2, Poções Elementais: Atira poções de gás/fogo/gelo nesta ordem alternativamente que causam dano em área, começando com 2 cargas.',
    imgh3: require('./assets/Skill_Concoction.png'),
    habilidade3tit: 'Concoção',
    habilidade3: 'Habilidade 3, Concoção: Cria uma poção que pode ser consumida para um efeito aleatório.'
  }
];

export default function App() {

  const criaItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.listaItem} 
      onPress={() => 
        Alert.alert(
          'Habilidades de ' + item.nome, 
          item.habilidade1 + '\n\n' + item.habilidade2 + '\n\n' + item.habilidade3
        )
      }
    >
      <Image source={item.img} style={styles.listaImagem} />

      <View style={styles.listaDetalhes}>
        
        <Text style={styles.textoForte}>Nome: <Text style={styles.textoNormal}>{item.nome}</Text></Text>
        <Image source={require('./assets/Health_Icon.png')}/>
        <Text style={styles.textoForte}>HP: <Text style={styles.textoNormal}>{item.hp}</Text></Text>
        <Image source={require('./assets/Armor_Icon.png')}/>
        <Text style={styles.textoForte}>Defesa: <Text style={styles.textoNormal}>{item.def}</Text></Text>
        <Image source={require('./assets/Energy_Icon.png')}/>
        <Text style={styles.textoForte}>Mana: <Text style={styles.textoNormal}>{item.mana}</Text></Text>
        <Image source={require('./assets/Critical_Chance_Icon.png')}/>
        <Text style={styles.textoForte}>Chance de Crítico: <Text style={styles.textoNormal}>{item.crtchan}%</Text></Text>
        <Image source={require('./assets/Damage_Icon.png')}/>
        <Text style={styles.textoForte}>Dano Desarmado: <Text style={styles.textoNormal}>{item.dmg}</Text></Text>
        <Image source={require('./assets/Movement_Speed_Icon.png')}/>
        <Text style={styles.textoForte}>Velocidade: <Text style={styles.textoNormal}>{item.spd}</Text></Text>
        <Image source={item.arminiimg} style={styles.habilidadeimagem}/>
        <Text style={styles.textoForte}>Arma Inicial: <Text style={styles.textoNormal}>{item.armini}</Text></Text>
        <Image source={item.imgpass} style={styles.habilidadeimagem}/>
        <Text style={styles.textoForte}>Passiva: <Text style={styles.textoNormal}>{item.pass}</Text></Text>
        <Image source={item.imgh1} style={styles.habilidadeimagem}/>
        <Text style={styles.textoForte}>Habilidade 1: <Text style={styles.textoNormal}>{item.habilidade1tit}</Text></Text>
        <Image source={item.imgh2} style={styles.habilidadeimagem}/>
        <Text style={styles.textoForte}>Habilidade 2: <Text style={styles.textoNormal}>{item.habilidade2tit}</Text></Text>
        <Image source={item.imgh3} style={styles.habilidadeimagem}/>
        <Text style={styles.textoForte}>Habilidade 3: <Text style={styles.textoNormal}>{item.habilidade3tit}</Text></Text>
      </View>

    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Text style={styles.titulo}>Escolha seu Personagem</Text>

      <FlatList 
        data={personagens} 
        renderItem={criaItem} 
        keyExtractor={item => item.id.toString()} 
        showsVerticalScrollIndicator={false} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',

    paddingTop: 50,
    paddingHorizontal: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#e24343',
    textAlign: 'center',
  },
  listaItem: {
    backgroundColor: '#5a4747',
    marginBottom: 15,
    padding: 15,
    borderRadius: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },
  listaImagem: {
    width: 60,
    height: 90,
    borderRadius: 8,
  },
  habilidadeimagem: {
    width: 30,
    height: 45,
    borderRadius: 8,
  },
  listaDetalhes: {
    marginLeft: 15,
    flex: 1,
  },
  textoForte: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#b1b1b1',
  },
  textoNormal: {
    fontWeight: 'normal',
    color: '#e7e7e7',
  }
});