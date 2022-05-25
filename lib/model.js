import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export function loadFBXModel(
  scene,
  fbxPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new FBXLoader()

    loader.load(
      fbxPath,
      fbx => {
        const obj = fbx.scene
        obj.name = 'Robot_Halo_5'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}
