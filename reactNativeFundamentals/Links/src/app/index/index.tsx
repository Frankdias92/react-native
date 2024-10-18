import { FlatList, Image, Modal, TouchableOpacity, View, Text, Alert } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { style } from './styles'

import { useCallback, useState } from 'react'

import { router, useFocusEffect } from 'expo-router'

import { Categories } from '@/components/categories'
import { LinkStorage } from '@/storage/link-storage'
import { Option } from '@/components/option'
import { Link } from '@/components/link'

import { categories } from '@/utils/categories'
import { colors } from '@/styles/colors'

export default function Index() {
  const [links, setLinks] = useState<LinkStorage[]>()
  const [category, setCategory] = useState(categories[0].name)

  async function getLinks() {
    try {
      const response = await LinkStorage.get()
      setLinks(response)

    } catch (error) {
      Alert.alert('Error', 'Ops! somenthing goes wrong to loader the links')
    }
  }

  useFocusEffect(useCallback(() => {
    getLinks()
  }, []))
  
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
        data={links}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Link 
            name={item.name} 
            url={item.url} onDetails={() => console.log('Click')}
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