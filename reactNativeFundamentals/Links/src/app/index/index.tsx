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
  const [showModal, setShowModal] = useState(false)
  const [category, setCategory] = useState(categories[0].name)

  const [link, setLink] = useState<LinkStorage>({} as LinkStorage)

  async function getLinks() {
    try {
      const response = await LinkStorage.get()

      const filtered = response.filter((link) => link.category === category)
      
      setLinks(filtered)
    } catch (error) {
      Alert.alert('Error', 'Ops! somenthing goes wrong to loader the links')
    }
  }

  function handleDetails(selected: LinkStorage) {
    setShowModal(true)
    setLink(selected)
  }

  async function removeLink() {
    try {
      await LinkStorage.remove(link.id)
      getLinks()
      setShowModal(false)
    } catch (error) {
      Alert.alert('Error', 'Something goes wrong on delete')
      console.log(error)
    }
  }

  async function handleRemove () {
    Alert.alert('Remove', 'Are you sure?', [
      { style: 'cancel', text: 'No' },
      { text: 'Yes', onPress: removeLink }
    ])
  }

  useFocusEffect(useCallback(() => {
    getLinks()
  }, [category]))
  
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
            url={item.url} onDetails={() => handleDetails(item)}
          />
        )}
        style={style.links}
        contentContainerStyle={style.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal 
        transparent 
        visible={showModal} 
        animationType='slide'
      >
        <View style={style.modal}>
          <View style={style.modalContent}>
            <View style={style.modalHeader}>
              <Text style={style.modalCategory}>
                {link.category}
              </Text>

              <TouchableOpacity onPress={() => setShowModal(false)}>
                <MaterialIcons name='close' size={20} color={colors.gray[400]}/>
              </TouchableOpacity>
            </View>

            <Text style={style.modalLinkName}>
              {link.name}
            </Text>

            <Text style={style.modalLinkName}>
              {link.url}
            </Text>

            <View style={style.modalFooter}>
              <Option 
                name='Delete' 
                icon='delete' 
                variant='secondary'
                onPress={handleRemove}
              />
              <Option name='Open' icon='language'/>
            </View>

          </View>
        </View>

      </Modal>
    </View>
  )
}