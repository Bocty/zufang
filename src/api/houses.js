import request from '@/utils/request'

export const Houses = ({ cityId, area, subway, rentType, price, more, roomType, oriented, characteristic, floor }) => {
  return request({
    url: 'houses',
    params: {
      cityId,
      area,
      subway,
      rentType,
      price,
      more,
      roomType,
      oriented,
      characteristic,
      floor
    }
  })
}

export const HouseType = (id) => {
  return request({
    url: 'houses/condition',
    params: {
      id
    }
  })
}
