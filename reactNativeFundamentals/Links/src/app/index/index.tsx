import { FlatList, Image, Modal, TouchableOpacity, View, Text } from 'react-native'
import { style } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { Category } from '@/components/category'
import { Categories } from '@/components/categories'
import { Link } from '@/components/link'
import { Option } from '@/components/option'
import { router } from 'expo-router'
import { useState } from 'react'
import { categories } from '@/utils/categories'

export default function Index() {
  const [category, setCategory] = useState(categories[0].name)
  
  return (
    <View style={style.containter}>
      <View style={ style.header }>
        <Image 
          style={style.logo}
          source={require('@/assets/logo.png')}
        />
        <TouchableOpacity>
          <MaterialIcons 
            name='add' size={32} color={colors.green[300]}
            onPress={() => router.navigate('/add')}
          />
        </TouchableOpacity>
      </View>

      <Categories onChange={setCategory} selected={category}/>

      <FlatList 
        data={['1','2','3',]}
        keyExtractor={item => item}
        renderItem={() => (
          <Link 
            name='Rocketseat' url='https://www.google.com' onDetails={() => console.log('Click')}
          />
        )}
        style={style.links}
        contentContainerStyle={style.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={false} >
        <View style={style.modal}>
          <View style={style.modalContent}>
            <View style={style.modalHeader}>
              <Text style={style.modalCategory}>
                Curso
              </Text>

              <TouchableOpacity >
                <MaterialIcons name='close' size={20} color={colors.gray[400]}/>
              </TouchableOpacity>
            </View>

            <Text style={style.modalLinkName}>
              Test
            </Text>

            <Text style={style.modalLinkName}>
              www.test.com
            </Text>

            <View style={style.modalFooter}>
              <Option name='Delete' icon='delete' variant='secondary'/>
              <Option name='Open' icon='language'/>
            </View>

          </View>
        </View>

      </Modal>
    </View>
  )
}