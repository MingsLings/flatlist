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
  }, 
  {
    id: 6,
    nome: 'Engenheiro',
    hp: '5(6)',
    def: '5(6)',
    mana: '180(200)',
    crtchan: '5',
    dmg: '3',
    spd: '6.5',
    armini: 'H2O',
    arminiimg: require('./assets/H2O.png'),
    pass: 'Resistência à Fogo: Garante imunidade a dano de fogo e diminuição de dano de explosão. Garante dano extra de fogo à inimigos.',
    imgpass: require('./assets/Buff_Fire.png'),
    img: require('./assets/Engineer_0_art.png'),
    imgh1: require('./assets/Skill_Gun_Turret.png'),
    habilidade1tit: 'Torreta de Armas',
    habilidade1: 'Habilidade 1, Torreta de Armas: Implanta uma torreta que atira em inimigos próximos. Podem existir até 3 torretas ao mesmo tempo.',
    imgh2: require('./assets/Skill_Armor_Mount.png'),
    habilidade2tit: 'Armadura de Montaria',
    habilidade2: 'Habilidade 2, Armadura de Montaria: Temporariamente te equipa com uma armadura da fábrica.',
    imgh3: require('./assets/Skill_Interceptor.png'),
    habilidade3tit: 'Interceptor',
    habilidade3: 'Habilidade 3, Interceptor: Cria uma torreta que impede projéteis e ataca inimigos caso não aja projéteis por perto.'
  }, 
  {
    id: 7,
    nome: 'Vampiro',
    hp: '3(4)',
    def: '4(5)',
    mana: '120(140)',
    crtchan: '5',
    dmg: '3',
    spd: '6.5',
    armini: 'Taça de Vinho Carmesim',
    arminiimg: require('./assets/Crimson_Wine_Glass.png'),
    pass: 'Orbe de Vida: Inimigos tem a chance de dropar orbes que recuperam sua vida ao injeri-los.',
    imgpass: require('./assets/Buff_Health_Orb.png'),
    img: require('./assets/Vampire_0_art.png'),
    imgh1: require('./assets/Skill_Bat_Swarm.png'),
    habilidade1tit: 'Enxame de Morcegos',
    habilidade1: 'Habilidade 1, Enxame de Morcegos: Invoca um enxame de morcegos que ataca inimigos e recupera sua vida. Se sua vida estiver cheia, sua armadura ou sua mana é recuperada.',
    imgh2: require('./assets/Skill_Alien_Swirl.png'),
    habilidade2tit: 'Redemoinho Alienígena',
    habilidade2: 'Habilidade 2, Redemoinho Alienígena: Cria um redemoinho que atrai inimigos, causa dano e rouba vida.',
    imgh3: require('./assets/Skill_Immortal.png'),
    habilidade3tit: 'Imortal',
    habilidade3: 'Habilidade 3, Imortal: Por um curto período de tempo, converte todo dano recebido em vida. Caso sua vida esteja cheia, regenera sua mana ou adiciona vida extra até um máximo de +10 além de sua vida total.'
  },
  {
    id: 8,
    nome: 'Paladino',
    hp: '1(2)',
    def: '8(9)',
    mana: '120(140)',
    crtchan: '0',
    dmg: '4',
    spd: '6.5',
    armini: 'Mangual Sagrada',
    arminiimg: require('./assets/Sacred_Flail.png'),
    pass: 'Explosão Radial: Causa dano em uma área ao redor do personagem ao receber dano que quebraria sua armadura.',
    imgpass: require('./assets/Buff_Radial_Blast.png'),
    img: require('./assets/Paladin_0_art.png'),
    imgh1: require('./assets/Skill_Energy_Shield.png'),
    habilidade1tit: 'Escudo de Energia',
    habilidade1: 'Habilidade 1, Escudo de Energia: Cria um escudo que bloqueia projéteis.',
    imgh2: require('./assets/Skill_Holy_Warrior.png'),
    habilidade2tit: 'Guerreiro Sagrado',
    habilidade2: 'Habilidade 2, Guerreiro Sagrado: Temporariamente te equipa com uma espada gigante que dispara projéteis e destroi projéteis inimigos.',
    imgh3: require('./assets/Skill_Splash_And_Bash.png'),
    habilidade3tit: 'Pancada de Escudo',
    habilidade3: 'Habilidade 3, Pancada de Escudo: Recebe +2 de defesa enquanto o escudo estiver ativo, podendo liberar a habilidade para atirar o escudo e acertar inimigos à distância. O escudo regenera mana e armadura ao votlar.'
  },
  {
    id: 9,
    nome: 'Elfo',
    hp: '5(6)',
    def: '4(5)',
    mana: '180(200)',
    crtchan: '5',
    dmg: '4',
    spd: '6.5',
    armini: 'Arco Ancião',
    arminiimg: require('./assets/Ancient_Bow.png'),
    pass: 'Carga: Diminui o tempo de carregamento de armas que precisam de carregamento.',
    imgpass: require('./assets/Buff_Charge.png'),
    img: require('./assets/Elf_0_art.png'),
    imgh1: require('./assets/Skill_Focus_Fire.png'),
    habilidade1tit: 'Foco de Fogo',
    habilidade1: 'Habilidade 1, Foco de Fogo: Automaticamente mira em inimigos e dispara 3 flechas mágicas.',
    imgh2: require('./assets/Skill_Arrow_Rain.png'),
    habilidade2tit: 'Chuva de Flechas',
    habilidade2: 'Habilidade 2, Chuva de Flechas: Dispara uma chuva de flechas que causa dano em área.',
    imgh3: require('./assets/Skill_Guardian_Elf.png'),
    habilidade3tit: 'Elfo Guardião',
    habilidade3: 'Habilidade 3, Elfo Guardião: Sumona um elfo guardião de um elemento entre fogo, gelo e ar para te auxiliar em combate.'
  },
  {
    id: 10,
    nome: 'Lobisomem',
    hp: '11(12)',
    def: '1(2)',
    mana: '120(140)',
    crtchan: '5',
    dmg: '5',
    spd: '6.5',
    armini: 'Garras Flamejantes',
    arminiimg: require('./assets/Flaring_Claw.png'),
    pass: 'Resistência à armadilhas: Garante imunidade a dano de armadilhas e dano de colisão.',
    imgpass: require('./assets/Buff_Trap.png'),
    img: require('./assets/Werewolf_0_art.png'),
    imgh1: require('./assets/Skill_Berserk.png'),
    habilidade1tit: 'Berserk',
    habilidade1: 'Habilidade 1, Berserk: Quanto menor sua vida, maior sua velocidade de ataque por um curto período de tempo.',
    imgh2: require('./assets/Skill_Blood_Thirst.png'),
    habilidade2tit: 'Sede de Sangue',
    habilidade2: 'Habilidade 2, Sede de Sangue: Ataca 4 vezes com as garras e recupera vida.',
    imgh3: require('./assets/Skill_Devour.png'),
    habilidade3tit: 'Devorar',
    habilidade3: 'Habilidade 3, Devorar: Devora um inimigo para recuperar vida e mana.'
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
        <Text style={styles.textoForte}><Image source={require('./assets/Health_Icon.png')} style={{width: 20, height: 17}}/> HP: <Text style={styles.textoNormal}>{item.hp}</Text></Text>
        <Text style={styles.textoForte}><Image source={require('./assets/Armor_Icon.png')} style={{width: 16, height: 20}}/> Defesa: <Text style={styles.textoNormal}>{item.def}</Text></Text>
        <Text style={styles.textoForte}><Image source={require('./assets/Energy_Icon.png')} style={{width: 18, height: 18}}/> Mana: <Text style={styles.textoNormal}>{item.mana}</Text></Text>
        <Text style={styles.textoForte}><Image source={require('./assets/Critical_Chance_Icon.png')} style={{width: 20, height: 17}}/> Chance de Crítico: <Text style={styles.textoNormal}>{item.crtchan}%</Text></Text>
        <Text style={styles.textoForte}><Image source={require('./assets/Damage_Icon.png')} style={{width: 11, height: 20}}/> Dano Desarmado: <Text style={styles.textoNormal}>{item.dmg}</Text></Text>
        <Text style={styles.textoForte}><Image source={require('./assets/Movement_Speed_Icon.png')} style={{width: 20, height: 13}}/> Velocidade: <Text style={styles.textoNormal}>{item.spd}</Text></Text>
        <Text style={styles.textoForte}><Image source={item.arminiimg} style={styles.habilidadeimagem}/> Arma Inicial: <Text style={styles.textoNormal}>{item.armini}</Text></Text>
        <Text style={styles.textoForte}><Image source={item.imgpass} style={styles.habilidadeimagem}/> Passiva: <Text style={styles.textoNormal}>{item.pass}</Text></Text>
        <Text style={styles.textoForte}><Image source={item.imgh1} style={styles.habilidadeimagem}/> Habilidade 1: <Text style={styles.textoNormal}>{item.habilidade1tit}</Text></Text>
        <Text style={styles.textoForte}><Image source={item.imgh2} style={styles.habilidadeimagem}/> Habilidade 2: <Text style={styles.textoNormal}>{item.habilidade2tit}</Text></Text>
        <Text style={styles.textoForte}><Image source={item.imgh3} style={styles.habilidadeimagem}/> Habilidade 3: <Text style={styles.textoNormal}>{item.habilidade3tit}</Text></Text>
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
    width: 45,
    height: 45,
    justifyContent: 'center',
    borderRadius: 3,
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