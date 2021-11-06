function HeaderItem({Icon,title}) {
    return (
        <div className='group'>
            <Icon className='h-8'/>
            <p className='opacity-0 group-hover:opacity-100 tracking-widest'>{title}</p>
            
        </div>
    )
}

export default HeaderItem