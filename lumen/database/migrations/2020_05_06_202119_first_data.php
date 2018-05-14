<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Hash;

class FirstData extends Migration {

  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {

    /*
     * Insert default roles (admin)
     */

    $adminRoleId = DB::table('roles')->insertGetId(
            array(
                'id' => 1,
                'image_id' => NULL,
                'name' => "admin",
                'shortDescription' => "Allowed to manage and edit all data"
            )
    );

    /*
     * Insert default members/users (admin)
     */

    DB::table('members')->insert(
            array(
                'email' => "admin",
                'firstName' => "admin",
                'lastName' => "admin",
                'phoneNumber' => "00000000000",
                'lastPaymentDate' => NULL,
                'role_id' => $adminRoleId,
                'password' => Hash::make("admin")
            )
    );


    /*
     * Insert all permissions
     */

    // MEMBERS
    DB::table('permissions')->insert(
            array(
                'name' => "read-members",
                'display_name' => "Read members",
                'description' => "Allowed to see all members"
            )
    );
    DB::table('permissions')->insert(
            array(
                'name' => "write-members",
                'display_name' => "Write members",
                'description' => "Allowed to create, update and delete a member"
            )
    );

    // ROLES
    DB::table('permissions')->insert(
            array(
                'name' => "read-roles",
                'display_name' => "Read roles",
                'description' => "Allowed to see all roles"
            )
    );
    DB::table('permissions')->insert(
            array(
                'name' => "write-roles",
                'display_name' => "Write roles",
                'description' => "Allowed to create, update and delete a role"
            )
    );

    // IMAGES
    DB::table('permissions')->insert(
            array(
                'name' => "read-images",
                'display_name' => "Read images",
                'description' => "Allowed to see all images"
            )
    );
    DB::table('permissions')->insert(
            array(
                'name' => "write-images",
                'display_name' => "Write images",
                'description' => "Allowed to create, update and delete an image"
            )
    );

    // MATERIALS
    DB::table('permissions')->insert(
            array(
                'name' => "read-materials",
                'display_name' => "Read materials",
                'description' => "Allowed to see all materials"
            )
    );
    DB::table('permissions')->insert(
            array(
                'name' => "write-materials",
                'display_name' => "Write materials",
                'description' => "Allowed to create, update and delete a material"
            )
    );

    // TYPES MATERIALS
    DB::table('permissions')->insert(
            array(
                'name' => "read-types-materials",
                'display_name' => "Read types of materials",
                'description' => "Allowed to see all types of materials"
            )
    );
    DB::table('permissions')->insert(
            array(
                'name' => "write-types-materials",
                'display_name' => "Write types of materials",
                'description' => "Allowed to create, update and delete a type of materials"
            )
    );

    // SPONSORS
    DB::table('permissions')->insert(
            array(
                'name' => "read-sponsors",
                'display_name' => "Read sponsors",
                'description' => "Allowed to see all sponsors"
            )
    );
    DB::table('permissions')->insert(
            array(
                'name' => "write-sponsors",
                'display_name' => "Write sponsors",
                'description' => "Allowed to create, update and delete a sponsor"
            )
    );

    // TRANSACTIONS
    DB::table('permissions')->insert(
            array(
                'name' => "read-transactions",
                'display_name' => "Read transactions",
                'description' => "Allowed to see all transactions"
            )
    );
    DB::table('permissions')->insert(
            array(
                'name' => "write-transactions",
                'display_name' => "Write transactions",
                'description' => "Allowed to create, update and delete a transaction"
            )
    );

    // METADATAS
    DB::table('permissions')->insert(
            array(
                'name' => "read-metadatas",
                'display_name' => "Read metadatas",
                'description' => "Allowed to see all metadatas"
            )
    );
    DB::table('permissions')->insert(
            array(
                'name' => "write-metadatas",
                'display_name' => "Write metadatas",
                'description' => "Allowed to create, update and delete a metadata"
            )
    );

    /*
     * Insert all metadatas with default value
     */

    DB::table('metadatas')->insert([
        [
            'metaKey' => "siteTitle",
            'metaValue' => "My association",
            'description' => "Name of the association and the website"
        ],
        [
            'metaKey' => "siteDescription",
            'metaValue' => "Description of my association",
            'description' => "Short description of the association and the website"
        ],
        [
            'metaKey' => "siteColor",
            'metaValue' => "#940031",
            'description' => "Color of the site in hexa ('#....') or rgb/rgba ('rgb(.,.,.)')"
        ],
        [
            'metaKey' => "siteLogo",
            'metaValue' => "https://www.ingenieur-imac.fr/images/logoIMAC.png",
            'description' => "URL of the association logo"
        ],
        [
            'metaKey' => "facebook_PrivateLink",
            'metaValue' => NULL,
            'description' => "Url of the private Facebook group"
        ],
        [
            'metaKey' => "facebook_PublicLink",
            'metaValue' => NULL,
            'description' => "Url of the public Facebook page"
        ],
        [
            'metaKey' => "twitter_PublicLink",
            'metaValue' => NULL,
            'description' => "Twitter account URL"
        ],
        [
            'metaKey' => "trello_PrivateLink",
            'metaValue' => NULL,
            'description' => "Private url of the trello"
        ],
        [
            'metaKey' => "drive_PrivateLink",
            'metaValue' => NULL,
            'description' => "Private url of the google drive"
        ]
            ]
    );
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
//
  }

}