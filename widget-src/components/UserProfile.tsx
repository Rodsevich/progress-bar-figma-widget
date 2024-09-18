

const { widget } = figma;
const { AutoLayout, Image, Text } = widget;

export const UserProfile = ({ user }: { user: any }) => {

  return (
    <AutoLayout
      horizontalAlignItems='center'
      verticalAlignItems='center'
    >
      {/* Image perfil */}
      <Image
        cornerRadius={100}
        src={user?.photoUrl || ''}
        width={50}
        height={50}
      />

      <AutoLayout padding={{ left: 8 }} direction="vertical">
        <Text fontSize={15} italic>Name</Text>
        <Text>{user?.name}</Text>

      </AutoLayout>
    </AutoLayout>
  )
}
