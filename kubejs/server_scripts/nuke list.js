   // This list (itemsToRemove) can be used to remove items from the game. 

   // Currently, it removes items from JEI, removes all related recipes for that item, 
   // and untags those items (untagging items is important to not break stuff when removing output recipes for that item)

   // It relies on the other "nuke" files in various KubeJS script folders to function properly.
   global.itemsToRemove = [   
      'toms_storage:ts.wireless_terminal',
      ['sophisticatedbackpacks:advanced_filter_upgrade', 'sophisticatedbackpacks:battery_upgrade', 
         'sophisticatedbackpacks:anvil_upgrade', 'sophisticatedbackpacks:xp_pump_upgrade', 
         'sophisticatedbackpacks:advanced_pump_upgrade', 'sophisticatedbackpacks:pump_upgrade', 
         'sophisticatedbackpacks:tank_upgrade', 'sophisticatedbackpacks:advanced_tool_swapper_upgrade', 
         'sophisticatedbackpacks:stack_upgrade_tier_4', 'sophisticatedbackpacks:stack_upgrade_tier_3', 
         'sophisticatedbackpacks:stack_upgrade_tier_2', 'sophisticatedbackpacks:stack_upgrade_tier_1', 
         'sophisticatedbackpacks:stack_upgrade_starter_tier', 'sophisticatedbackpacks:stonecutter_upgrade', 
         'sophisticatedbackpacks:crafting_upgrade', 'sophisticatedbackpacks:auto_blasting_upgrade', 
         'sophisticatedbackpacks:blasting_upgrade', 'sophisticatedbackpacks:auto_smoking_upgrade', 
         'sophisticatedbackpacks:smoking_upgrade', 'sophisticatedbackpacks:auto_smelting_upgrade', 
         'sophisticatedbackpacks:smelting_upgrade', 'sophisticatedbackpacks:inception_upgrade', 
         'sophisticatedbackpacks:refill_upgrade', 'sophisticatedbackpacks:advanced_deposit_upgrade', 
         'sophisticatedbackpacks:deposit_upgrade', 'sophisticatedbackpacks:advanced_restock_upgrade', 
         'sophisticatedbackpacks:restock_upgrade', 'sophisticatedbackpacks:advanced_void_upgrade', 
         'sophisticatedbackpacks:void_upgrade', 'sophisticatedbackpacks:advanced_compacting_upgrade', 
         'sophisticatedbackpacks:compacting_upgrade', 'sophisticatedbackpacks:feeding_upgrade', 
         'sophisticatedbackpacks:advanced_feeding_upgrade', 'sophisticatedbackpacks:advanced_magnet_upgrade', 
         'sophisticatedbackpacks:magnet_upgrade', 'sophisticatedbackpacks:advanced_pickup_upgrade', 
         'sophisticatedbackpacks:advanced_pickup_upgrade', 'sophisticatedbackpacks:filter_upgrade',
         'sophisticatedbackpacks:pickup_upgrade'],
         'sophisticatedbackpacks:upgrade_base',
         'sophisticatedbackpacks:backpack',
         'sophisticatedbackpacks:netherite_backpack',
         'create_enchantment_industry:experience_rotor',
         ['create_central_kitchen:pumpkin_pie_slice', 'create_central_kitchen:cherry_pie_slice',
         'create_central_kitchen:truffle_pie_slice', 'create_central_kitchen:mulberry_pie_slice',
         'create_central_kitchen:chocolate_cake_slice', 'create_central_kitchen:honey_cake_slice',
         'create_central_kitchen:aloe_cake_slice', 'create_central_kitchen:passionfruit_cake_slice',
         'create_central_kitchen:pumpkin_cake_slice', 'create_central_kitchen:sweet_berry_cake_slice',
         'create_central_kitchen:creative_tab_icon', 'create_central_kitchen:yucca_cake_slice'],
         'toms_storage:ts.storage_terminal',
         "farmersdelight:wheat_dough"

   ] 